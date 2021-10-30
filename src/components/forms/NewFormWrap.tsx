import React, { useState } from 'react';
import Alert from '../alert/Alert';
import SubmitButton from './SubmitButton';
import { FormattedMessage } from 'react-intl';
import SlippageSelector from './SlippageSelector';

interface NewFormWrapProps {
  title?: string;
  buttonText?: string;
  canSubmit?: boolean;
  slippageTolerance: number;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  info?: string | JSX.Element;
  showElseView?: boolean;
  elseView?: JSX.Element;
  onChange: (slippage: number) => void;
}

export default function NewFormWrap({
  children,
  title,
  buttonText,
  slippageTolerance,
  canSubmit = true,
  onSubmit,
  info,
  showElseView,
  elseView,
  onChange,
}: React.PropsWithChildren<NewFormWrapProps>) {
  const [error, setError] = useState<Error>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      onSubmit(event);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <form
      className="overflow-y-auto bg-secondary shadow-2xl rounded-xl p-7 bg-dark"
      onSubmit={handleSubmit}
    >
      {title && (
        <>
          <h2 className="formTitle flex justify-between font-bold text-xl text-white text-left pb-2">
            <FormattedMessage id={title} defaultMessage={title} />
            <SlippageSelector
              slippageTolerance={slippageTolerance}
              onChange={onChange}
            />
          </h2>
        </>
      )}
      {error && <Alert level="error" message={error.message} />}
      {children}
      {showElseView && elseView ? (
        elseView
      ) : (
        <SubmitButton
          disabled={!canSubmit}
          text={buttonText || title}
          info={info}
        />
      )}
    </form>
  );
}