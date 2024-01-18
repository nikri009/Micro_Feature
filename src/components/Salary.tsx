import { useState } from "react";
import { Link } from "react-router-dom";

const Salary:React.FC = () => {
    const [form, setForm] = useState({
        gaji:0,
        tunjangan:0,
        kebutuhan:0
    })
    const [hasil, setHasil] = useState({
        gajikotor:0,
        gajipokok:0,
        gajibersih:0
    })

    const formatRupiah = (amount: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
      };
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev)=>({
            ...prev, [name]: Number(value),
        }))
    }
   

    const hitung = (e: React.FormEvent) => {
        e.preventDefault()
        const { gaji, tunjangan, kebutuhan } = form;

        const gajikotor = gaji + tunjangan;
        const gajipokok = gaji;
        const gajibersih = gajikotor - kebutuhan;

        setHasil({
            gajikotor,
            gajipokok,
            gajibersih
        })
    }


    return (
        <div>
    
            <Link to={'/'} className="flex justify-center items-center w-14 text-white my-5 mx-8 gap-2" >
                <img src="../assets/img/Back.png" alt="back" className="w-4"/>
                 <b>Back</b> 
            </Link>
            <div className="grid justify-items-center text-white my-10 border-solid border-2 mx-4">
            
                

                    <h1 className="text-3xl my-2"><b>Sallary Calculating</b></h1>
                    <p>Please Input Your Data</p>
                
                <br />

                <div className="flex gap-10 border-1">
                    <form className="grid gap-2">
                        <label htmlFor="gaji">Gaji Pokok</label>
                        <input type="number" className="text-black rounded-sm" name="gaji" onChange={handleChange}/>
                        <label htmlFor="tunjangan">Tunjangan</label>
                        <input type="number" className="text-black rounded-sm" name="tunjangan"  onChange={handleChange}/>
                        <label htmlFor="kebutuhan">Kewajiban Pokok</label>
                        <input type="number" className="text-black rounded-sm" name="kebutuhan"  onChange={handleChange}/>
                        <button className="bg-sky-900 my-5 rounded-md" onClick={hitung}>Hitung Gaji</button>
                    </form>
                    <div >
                        <p className="text-2xl">Hasil :</p>
                        <p>Gaji Kotor: {formatRupiah(hasil.gajikotor)}</p>
                        <p>Gaji Pokok: {formatRupiah(hasil.gajipokok)}</p>
                        <p>Gaji Bersih: {formatRupiah(hasil.gajibersih)} </p>
                    </div>

                    
                </div>
                
            </div>
        </div>
       
    )
}

export default Salary;