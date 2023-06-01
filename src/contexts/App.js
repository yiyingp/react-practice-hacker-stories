import React from 'react';
import { CurrencyProvider, useCurrency, CURRENCIES } from './currency';

const DATA = [
    {
        id: '1',
        title: 'The Road to React',
        price: 19.99,
    },
    {
        id: '2',
        title: 'The Road to GraphQL',
        price: 29.99,
    },
]

const App = () => {
    // const [currency, setCurrency] = React.useState(CURRENCIES.Euro);

    return (
        <CurrencyProvider>
            <CurrencyButtons />
            <Books list={DATA} />
        </CurrencyProvider>
    );
};

const CurrencyButtons = () => {
    const { onChange } = useCurrency();
    
    return Object.values(CURRENCIES).map((item => (
        <CurrencyButton key={item.label} onClick={() => onChange(item)}>
            {item.label}
        </CurrencyButton>
    )));
}

const CurrencyButton = ({ onCLick, children }) => {
    return (
        <button type="button" onClick={onCLick}>
            {children}
        </button>
    );
}

const Books = ({ list }) => {
    return (
        <ul>
            {list.map((item) => {
                return (
                    <Book key={item.id} item={item} />
                );
            })}
        </ul>
    );
}

const Book = ({ item }) => {
    const { value } = useCurrency();

    const price = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: value.code,
    }).format(item.price * value.conversionRate);

    return (
        <li>
            {item.title} - {price} 
        </li>          
    )
}