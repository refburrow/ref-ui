import React from 'react';
import { toRealSymbol } from '~utils/token';
import { TokenMetadata } from '../../services/ft-contract';

interface TokenProps {
  token: TokenMetadata;
  onClick: (token: TokenMetadata) => void;
  render?: (token: TokenMetadata) => React.ReactElement;
}

export default function Token({ token, onClick, render }: TokenProps) {
  const { icon, symbol, id } = token;
  return (
    <section
      className={`${
        onClick ? 'cursor-pointer' : ' '
      } flex justify-between align-center py-4 px-2 w-full text-center hover:bg-secondaryScale-100`}
      onClick={() => onClick && onClick(token)}
    >
      <div className="w-full text-left">
        <div
          className="flex items-center text-xs"
          style={{ lineHeight: 'unset' }}
        >
          {icon ? (
            <img
              className="h-6 w-6 mr-3"
              src={icon}
              alt={toRealSymbol(symbol)}
            />
          ) : (
            <div className="h-6 w-6 mr-3"></div>
          )}
          <div className="block">{toRealSymbol(symbol)}</div>
        </div>
      </div>
      {render && render(token)}
    </section>
  );
}
