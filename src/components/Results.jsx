import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
    const data = calculateInvestmentResults(input);
    const initialInvestment =
        data[0].valueEndOfYear -
        data[0].interest -
        data[0].annualInvestment;

    return (
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {data.map((e) => {
                    const totalInterest =
                        e.valueEndOfYear -
                        e.annualInvestment * e.year -
                        initialInvestment;

                    const totalAmountInvested =
                        e.valueEndOfYear - totalInterest;

                    return (
                        <tr key={e.year}>
                            <td>{e.year}</td>
                            <td>{formatter.format(e.valueEndOfYear)}</td>
                            <td>{formatter.format(e.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
