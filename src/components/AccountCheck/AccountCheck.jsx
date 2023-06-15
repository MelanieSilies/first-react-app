import './AccountCheck.scss';

const transactions = [
    {
        where: 'Tankstelle',
        value: -75.00
    },
    {
        where: 'Freibad',
        value: -13.50
    },
    {
        where: 'Lohn',
        value: +900
    },
]

export const AccountCheck = () => {
    const balance = 830;

    return (
        <>
        <div>
            {balance >= 0
            ? (
                <p>Kontostand ist {balance} €. Eine Auszahlung ist möglich.</p>
            )
            : (
                <p>Kontostand ist {balance} €. Es ist keine Auszahlung mehr möglich.</p>
            )}
        </div>
        <div>
            <h3>Letzte Transaktionen:</h3>
                {transactions.map((transaction, i) => (
                    <p key={i} style={{color: transaction.value < 0? 'red' : 'green'}}>
                        {transaction.where}: {transaction.value}
                    </p>
                ))}
            </div>
        </>
    );
};


//* style={{color: transaction.value < 0? 'red' : 'green'}}>

// Die doppelten geschweiften Klammern ({{}}) werden verwendet, um in JSX ein JavaScript-Objekt für die style-Eigenschaft anzugeben.
// In JSX werden geschweifte Klammern ({}) verwendet, um JavaScript-Ausdrücke einzubetten. Da der Wert der style-Eigenschaft ein JavaScript-Objekt sein muss, müssen wir die äußeren geschweiften Klammern verwenden, um den JavaScript-Ausdruck für das Objekt anzugeben.
