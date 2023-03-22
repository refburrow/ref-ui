import React, { useState, useEffect } from 'react';
import { useOrderlyContext } from '../../orderly/OrderlyContext';
import RecentTrade from '../RecentTrade';

import { MyOrder, Orders, SymbolInfo } from '../../orderly/type';
import { MyOrderTip } from '../Common';
import {
  digitWrapper,
  numberWithCommas,
  numberWithCommasPadding,
} from '../../utiles';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { Selector } from '../OrderBoard';
import { IoArrowUpOutline } from 'react-icons/io5';
import Big from 'big.js';
import { TextWrapper } from '../UserBoard/index';
import { OrderlyLoading } from '../Common/Icons';
import { useClientMobile } from '../../../../utils/device';
import {
  scientificNotationToString,
  formatWithCommas,
} from '../../../../utils/numbers';
import { useInView } from 'react-intersection-observer';
import { useIntl } from 'react-intl';

function parseSymbol(fullName: string) {
  return {
    symbolFrom: fullName.split('_')[1],
    symbolTo: fullName.split('_')[2],
  };
}

function groupOrdersByPrecision({
  orders,
  precision,
  pendingOrders,
  symbolInfo,
}: {
  orders: Orders | undefined;
  precision: number;
  pendingOrders: MyOrder[];
  symbolInfo: SymbolInfo;
}) {
  // this function is to group orders by precision,

  const decimalPlaces = getDecimalPlaceByNumber(precision);

  // quantity: new BigNumber(asksItem[1]).toFixed(quantityDecimal, 1),

  if (!orders) return {};

  const asks = orders.asks;

  const bids = orders.bids;

  const groupedAsks = asks.reduce((acc, cur) => {
    const groupKey =
      decimalPlaces === 0
        ? new Big(new Big(cur[0]).div(precision).toFixed(0, 3))
            .times(precision)
            .toFixed(0, 3)
        : new Big(cur[0]).toFixed(decimalPlaces, 3);

    const keyStr = groupKey.toString();

    return {
      ...acc,
      [groupKey]: acc[keyStr]
        ? new Big(acc[keyStr]).plus(new Big(cur[1])).toNumber()
        : cur[1],
    };
  }, {} as Record<string, number>);

  const sortedAsks = Object.entries(groupedAsks)
    .map(([price, amount]) => [Number(price), amount])
    .sort((a, b) => a[0] - b[0]);

  const groupedBids = bids.reduce((acc, cur) => {
    const groupKey =
      decimalPlaces === 0
        ? new Big(new Big(cur[0]).div(precision).toFixed(0, 0))
            .times(precision)
            .toFixed(0, 0)
        : new Big(cur[0]).toFixed(decimalPlaces, 0);

    const keyStr = groupKey.toString();

    return {
      ...acc,
      [groupKey]: acc[keyStr]
        ? new Big(acc[keyStr]).plus(new Big(cur[1])).toNumber()
        : cur[1],
    };
  }, {} as Record<string, number>);

  const sortedBids = Object.entries(groupedBids)
    .map(([price, amount]) => [Number(price), amount])
    .sort((a, b) => b[0] - a[0]);

  const groupedAsktotalSize = sortedAsks.reduce(
    (acc, cur, index: number) => {
      const groupKey = cur[0];

      if (index === 0) {
        return {
          [groupKey]: cur[1],
        };
      }

      return {
        ...acc,
        [groupKey]: new Big(cur[1])
          .plus(new Big(acc?.[sortedAsks[index - 1]?.[0]?.toString()] || 0))
          .toNumber(),
      };
    },

    {} as Record<string, number>
  );

  const groupedBidtotalSize = sortedBids.reduce(
    (acc, cur, index: number) => {
      const groupKey = cur[0];

      if (index === 0) {
        return {
          [groupKey]: cur[1],
        };
      }

      return {
        ...acc,
        [groupKey]: new Big(cur[1])
          .plus(new Big(acc?.[sortedBids[index - 1]?.[0]?.toString()] || 0))
          .toNumber(),
      };
    },

    {} as Record<string, number>
  );

  const groupMyPendingOrders = pendingOrders.reduce((acc, cur) => {
    const groupKey = Number(
      decimalPlaces === 0
        ? new Big(
            new Big(cur.price)
              .div(precision)
              .toFixed(0, cur.side === 'BUY' ? 0 : 3)
          )
            .times(precision)
            .toFixed(0, cur.side === 'BUY' ? 0 : 3)
        : new Big(cur.price).toFixed(decimalPlaces, cur.side === 'BUY' ? 0 : 3)
    );

    const keyStr = groupKey.toString();

    return {
      ...acc,
      [groupKey]: acc[keyStr]
        ? acc[keyStr] + (cur.quantity - cur.executed || 0)
        : cur.quantity - cur.executed || 0,
    };
  }, {} as Record<string, number>);

  return {
    asks: sortedAsks.sort((a, b) => a[0] - b[0]),

    bids: sortedBids,
    asktotalSize: groupedAsktotalSize,
    bidtotalSize: groupedBidtotalSize,
    groupMyPendingOrders,
  };
}

function getDecimalPlaceByNumber(precision: number) {
  const str = precision.toString();

  if (str.indexOf('.') === -1) return 0;
  else return str.split('.')[1].length;
}

export const REF_ORDERLY_PRECISION = 'REF_ORDERLY_PRECISION';

function OrderLine({
  order,
  i,
  totalSize,
  setBridgePrice,
  type,
  pendingOrders,
  groupMyPendingOrders,
  zIndex,
  setInViewCOunt,
  inViewCount,
  decimalLength,
  symbolInfo,
}: {
  order: number[];
  i: number;
  totalSize: Record<string, number>;
  type: 'bid' | 'ask';
  setBridgePrice: (price: string) => void;
  pendingOrders: MyOrder[];
  groupMyPendingOrders: Record<string, number>;
  zIndex: number;
  setInViewCOunt: (count: number) => void;
  inViewCount: number;
  decimalLength: number;
  symbolInfo: SymbolInfo;
}) {
  const { inView, ref } = useInView();

  useEffect(() => {
    if (inView) {
      setInViewCOunt(inViewCount + 1);
    } else {
      setInViewCOunt(inViewCount - 1);
    }
  }, [inView]);

  let quantityDecimal =
    Math.log10(symbolInfo.base_tick) > 0
      ? 0
      : -Math.log10(symbolInfo.base_tick);

  quantityDecimal = quantityDecimal > 3 ? 3 : quantityDecimal;
  if (symbolInfo.symbol.toLowerCase().includes('woo')) {
    quantityDecimal = 0;
  }

  return (
    <div
      className={
        'relative font-nunito grid pl-5 pr-4 cursor-pointer hover:bg-symbolHover grid-cols-3 lg:mr-2 py-1 justify-items-end'
      }
      ref={ref}
      id={`order-id-${order[0]}`}
      key={`orderbook-${type}-` + i}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setBridgePrice(order[0].toString());
      }}
    >
      <span
        className={` ${
          type === 'ask' ? 'text-sellColorNew' : 'text-buyGreen'
        } justify-self-start`}
      >
        {decimalLength === 0
          ? numberWithCommas(order[0])
          : numberWithCommasPadding(order[0], decimalLength)}
      </span>

      <span className="mr-4">
        {numberWithCommas(new Big(order[1]).toFixed(quantityDecimal, 0))}
      </span>

      <span>
        {numberWithCommas(
          new Big(totalSize?.[order[0]]).toFixed(quantityDecimal, 0)
        )}
      </span>

      <div
        className="absolute left-0 top-1 z-40"
        style={{
          // zIndex: Math.max(200, asks.length - 40 + 1) + i,
          zIndex,
        }}
      >
        {pendingOrders && groupMyPendingOrders[order[0]] && (
          <MyOrderTip
            price={order[0]}
            scrollTagID={`${type === 'bid' ? 'buy' : 'sell'}-order-book-panel`}
            quantity={groupMyPendingOrders[order[0]]}
          />
        )}
      </div>
    </div>
  );
}

function OrderBook() {
  const {
    orders,
    symbol,
    pendingOrders,
    recentTrades,
    ordersUpdate,
    setBridgePrice,
    handlePendingOrderRefreshing,
    availableSymbols,
  } = useOrderlyContext();

  const symbolInfo = availableSymbols?.find((s) => s.symbol === symbol);

  const storedPrecision = sessionStorage.getItem(REF_ORDERLY_PRECISION);

  const [inViewAsk, setInViewAsk] = useState<number>(0);

  const [inViewBid, setInViewBid] = useState<number>(0);

  const [precision, setPrecision] = useState<number>(0.01);

  useEffect(() => {
    if (!symbolInfo) return;
    let precision = symbolInfo.quote_tick;

    const storedNumberPrecision = storedPrecision ? Number(storedPrecision) : 0;

    if (
      storedNumberPrecision > 0 &&
      storedNumberPrecision > precision / 10 &&
      storedNumberPrecision < precision * 10 ** 5
    ) {
      precision = storedNumberPrecision;
    }

    setPrecision(precision);
  }, [JSON.stringify(symbolInfo)]);

  const hitMyOrder = pendingOrders?.some((po) => {
    return (
      ordersUpdate?.asks?.some((a) => a[0] === po?.price) ||
      ordersUpdate?.bids?.some((a) => a[0] === po?.price)
    );
  });

  useEffect(() => {
    if (hitMyOrder) {
      handlePendingOrderRefreshing();
    }
  }, [hitMyOrder, JSON.stringify(ordersUpdate)]);

  const [showPrecisionSelector, setShowPrecisionSelector] =
    useState<boolean>(false);

  useEffect(() => {
    if (showPrecisionSelector) {
      document.documentElement.onclick = () => {
        setShowPrecisionSelector(false);
      };
    }
  }, [showPrecisionSelector]);

  const { asks, bids, asktotalSize, bidtotalSize, groupMyPendingOrders } =
    groupOrdersByPrecision({
      orders,
      precision,
      pendingOrders,
      symbolInfo,
    });

  const isMobile = useClientMobile();

  const { symbolFrom, symbolTo } = parseSymbol(symbol);
  const [tab, setTab] = useState<'recent' | 'book'>('book');

  const [loading, setLoading] = useState<boolean>(orders === undefined);

  useEffect(() => {
    const symbolInfo = availableSymbols?.find((s) => s.symbol === symbol);

    if (!!orders && symbolInfo) {
      setLoading(false);
    }
  }, [!!orders, availableSymbols]);

  const marketTradeDisplay = numberWithCommas(
    recentTrades?.at(0)?.executed_price || 0
  );

  const diff =
    (recentTrades?.at(0)?.executed_price || 0) -
    (recentTrades?.at(1)?.executed_price || 0);

  const intl = useIntl();

  return (
    <div className="w-full h-full flex flex-col  relative border  border-boxBorder text-sm rounded-2xl bg-black bg-opacity-10 py-4 ">
      <div className="px-4 relative flex mb-2 border-b border-white border-opacity-10 items-center ">
        <div
          onClick={() => {
            setTab('book');
          }}
          className={`cursor-pointer text-left relative ${
            tab === 'book' ? 'text-white' : 'text-primaryOrderly'
          } font-bold mb-1`}
        >
          {intl.formatMessage({
            id: 'orderbook',
            defaultMessage: 'Order Book',
          })}
          {tab === 'book' && (
            <div className="h-0.5 bg-gradientFromHover rounded-lg w-full absolute -bottom-1.5 left-0"></div>
          )}
        </div>
        <div
          onClick={() => {
            setTab('recent');
          }}
          className={`cursor-pointer text-left relative ${
            tab === 'recent' ? 'text-white' : 'text-primaryOrderly'
          } ml-5 font-bold mb-1`}
        >
          {intl.formatMessage({
            id: 'trades',
            defaultMessage: 'Trades',
          })}
          {tab === 'recent' && (
            <div className="h-0.5 bg-gradientFromHover rounded-lg w-full absolute -bottom-1.5 left-0"></div>
          )}
        </div>
        {tab === 'book' && (
          <div
            className="max-w-fit min-w-p72 cursor-pointer rounded-md lg:bg-symbolHover pl-2 absolute   right-4 bottom-1 xs:bg-none md:bg-none xs:text-10px text-white flex justify-center items-center"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (isMobile) return;
              setShowPrecisionSelector(!showPrecisionSelector);
            }}
          >
            <span
              className="relative right-2 flex items-center justify-center text-primaryText text-xs"
              style={{
                height: '22px',
              }}
            >
              {!symbolInfo ? '-' : precision}
            </span>
            {isMobile && (
              <>
                <span
                  className="text-xl mr-2 rounded-md w-5 flex items-center justify-center h-5 bg-selectTokenV3BgColor text-primaryText"
                  onClick={() => {
                    if (precision > symbolInfo.quote_tick) {
                      setPrecision(precision / 10);
                    }
                  }}
                >
                  -
                </span>

                <span
                  className="text-xl flex items-center justify-center w-5 h-5 rounded-md bg-selectTokenV3BgColor text-primaryText"
                  onClick={() => {
                    if (precision < symbolInfo.quote_tick * 10 ** 4) {
                      setPrecision(precision * 10);
                    }
                  }}
                >
                  +
                </span>
              </>
            )}
            {!isMobile && (
              <MdArrowDropDown
                size={22}
                className="text-primaryOrderly absolute right-0 justify-self-end"
              ></MdArrowDropDown>
            )}

            {showPrecisionSelector && (
              <Selector
                selected={precision.toString()}
                setSelect={(textId: string) => {
                  setPrecision(Number(textId));
                  sessionStorage.setItem(REF_ORDERLY_PRECISION, textId);
                  setShowPrecisionSelector(false);
                }}
                className=" min-w-p72 -left-2 top-1 relative"
                list={[
                  {
                    text: `${symbolInfo.quote_tick}`,
                    textId: `${symbolInfo.quote_tick}`,
                  },
                  {
                    text: `${symbolInfo.quote_tick * 10}`,
                    textId: `${symbolInfo.quote_tick * 10}`,
                  },
                  {
                    text: `${symbolInfo.quote_tick * 10 ** 2}`,
                    textId: `${symbolInfo.quote_tick * 10 ** 2}`,
                  },
                  {
                    text: `${symbolInfo.quote_tick * 10 ** 3}`,
                    textId: `${symbolInfo.quote_tick * 10 ** 3}`,
                  },
                  {
                    text: `${symbolInfo.quote_tick * 10 ** 4}`,
                    textId: `${symbolInfo.quote_tick * 10 ** 4}`,
                  },
                ]}
              />
            )}
          </div>
        )}
      </div>

      {loading && <OrderlyLoading></OrderlyLoading>}

      {tab === 'book' && !loading && (
        <>
          <div className="px-4 flex items-center text-xs mb-2 lg:mr-2 text-primaryOrderly justify-between ">
            <div className="flex items-center">
              <span className="flex items-center">
                {intl.formatMessage({
                  id: 'price',
                  defaultMessage: 'Price',
                })}
              </span>

              <span className="text-primaryText rounded-md ml-1 pt-0.5 px-1 text-xs py-0 bg-primaryOrderly bg-opacity-10">
                {symbolTo}
              </span>
            </div>

            <div className="flex items-center">
              <span>
                {intl.formatMessage({
                  id: 'qty',
                  defaultMessage: 'Qty',
                })}
              </span>

              <span className="text-primaryText rounded-md ml-1 pt-0.5 px-1 text-xs py-0 bg-primaryOrderly bg-opacity-10">
                {symbolFrom}
              </span>
            </div>

            <div className="flex items-center">
              {intl.formatMessage({
                id: 'total_orderly',
                defaultMessage: 'Total',
              })}
              <span className="text-primaryText rounded-md ml-1 pt-0.5 px-1 text-xs py-0 bg-primaryOrderly bg-opacity-10">
                {symbolFrom}
              </span>
            </div>
          </div>

          {/* sell  */}
          <section
            className="text-xs flex flex-shrink-0  flex-col-reverse overflow-auto text-white "
            id="sell-order-book-panel"
            style={{
              maxHeight: 'calc(50% - 50px)',
            }}
          >
            {asks?.map((order, i) => {
              return (
                <OrderLine
                  type="ask"
                  setBridgePrice={setBridgePrice}
                  order={order}
                  i={i}
                  pendingOrders={pendingOrders}
                  groupMyPendingOrders={groupMyPendingOrders}
                  totalSize={asktotalSize}
                  zIndex={31}
                  inViewCount={inViewAsk}
                  setInViewCOunt={setInViewAsk}
                  decimalLength={getDecimalPlaceByNumber(precision)}
                  symbolInfo={symbolInfo}
                />
              );
            })}
          </section>

          {/* market trade */}

          <div
            className={`text-center font-nunito flex items-center py-1 justify-center ${
              diff > 0
                ? 'text-buyGreen'
                : diff < 0
                ? 'text-sellRed'
                : 'text-primaryText'
            } text-lg`}
          >
            {orders && recentTrades?.length > 0 && marketTradeDisplay}

            {orders && recentTrades?.length > 0 && diff !== 0 && (
              <IoArrowUpOutline
                className={diff < 0 ? 'transform rotate-180' : ''}
              />
            )}
          </div>

          {/* buy */}

          <section
            className="text-xs flex-row  overflow-auto  overflow-x-visible text-white"
            id="buy-order-book-panel"
          >
            {bids?.map((order, i) => {
              return (
                <OrderLine
                  type="bid"
                  setBridgePrice={setBridgePrice}
                  order={order}
                  i={i}
                  pendingOrders={pendingOrders}
                  groupMyPendingOrders={groupMyPendingOrders}
                  totalSize={bidtotalSize}
                  zIndex={30}
                  inViewCount={inViewBid}
                  setInViewCOunt={setInViewBid}
                  decimalLength={getDecimalPlaceByNumber(precision)}
                  symbolInfo={symbolInfo}
                />
              );
            })}
          </section>
        </>
      )}
      {tab === 'recent' && !loading && <RecentTrade />}
    </div>
  );
}

export default OrderBook;