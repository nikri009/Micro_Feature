import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const CurrencyConvert:React.FC = () => {
    const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("IDR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(e.target.value);
  };

  useEffect(() => {
    // Fetch exchange rate data from API
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        setExchangeRate(data.rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching exchange rate data:", error);
      }
    };

    fetchData();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    // Convert the amount when exchange rate or amount changes
    if (exchangeRate !== null) {
      setConvertedAmount(amount * exchangeRate);
    }
  }, [exchangeRate, amount]);

    return(
        <div >
            <Link to={'/'} className="flex justify-center items-center w-14 text-white my-5 mx-8 gap-2">
                <img src="/src/assets/img/Back.png" alt="back" className="w-4" />
                <b>Back</b>
            </Link>
            <div className="grid justify-items-center text-white my-10 border-solid border-2 mx-4">
                <h1 className="text-3xl my-2">
                <b>Currency Convert</b>
                </h1>
                <p>Konversi mata uang IDR, USD, EUR, GBP</p>
                <br />

                <div className="gap-10 border-1 w-full grid justify-items-center">
                <form className="flex w-full justify-center gap-3">
                    <div>
                        <label htmlFor="amount">Jumlah: </label>
                        <input type="number" id="amount" value={amount} onChange={handleAmountChange} className="text-black"/>
                    </div>
                    <div >
                        <label htmlFor="fromCurrency">Dari Mata Uang: </label>
                        <select id="fromCurrency" value={fromCurrency} onChange={handleFromCurrencyChange} className="text-black">
                            <option value="IDR">IDR</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </div>
                    
                    <div >
                    <label htmlFor="toCurrency">Ke Mata Uang: </label>
                    <select id="toCurrency" value={toCurrency} onChange={handleToCurrencyChange} className="text-black">
                        <option value="IDR">IDR</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                    </div>
                </form>

                <div className="my-3">
                    <p>Hasil Konversi:</p>
                    {convertedAmount !== null ? (
                    <p>{amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}</p>
                    ) : (
                    <p>Loading...</p>
                    )}
                </div>
                </div>
            </div>
        </div>
    )
}
export default CurrencyConvert;