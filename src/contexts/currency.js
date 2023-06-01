import React from 'react';

const CURRENCIES = {
    Euro: {
      code: 'EUR',
      label: 'Euro',
      conversionRate: 1, // base conversion rate
    },
    Usd: {
      code: 'USD',
      label: 'US Dollar',
      conversionRate: 1.19,
    },
};

const CurrencyContext = React.createContext(null);
const useCurrency = () => {
    const [currency, setCurrency] = React.useContext(CurrencyContext);
    const handleCurrency = (value) => {
        setCurrency(value);
    };
    return { value: currency, onChange: handleCurrency };
}
const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = React.useState(CURRENCIES.Euro);

    return (
        <CurrencyContext.Provider value={[currency, setCurrency]}>
            {children}
        </CurrencyContext.Provider>
    )
}

export { CurrencyProvider, useCurrency, CURRENCIES };