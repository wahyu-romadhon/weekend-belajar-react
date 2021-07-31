import React, { useState, useEffect } from 'react';

function HalamanDua() {
    const [nilai, setNilai] = useState(['2', '6', '5', '4', '7', '3']);
    // const reverse = nilai;

    const areAnagram = (str1, str2) => 
    str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');

    const hasilAnagram = () => {
        const hasil = [];

        let  a1 = areAnagram('listen', 'silent');
        let a2 = areAnagram('they see', 'the eyes');
        let a3 = areAnagram('node', 'deno');

        hasil.push(a1, a2, a3);

        console.log('hasil anagram', hasil);
    }
    return (
        <div className="container-halaman2">
            <div>
                {/* {
                    console.log('nilai pake reverse', nilai.reverse())
                }
                {
                    console.log('nilai tanpa reverse', nilai.reverse())
                } */}
                {
                    console.log(hasilAnagram())
                }
            </div>

            Halaman dua dashboard!
        </div>
    );
}

export default HalamanDua;