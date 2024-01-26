const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember"
];

const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]


const Options = {
  MonthOption: () => {
    return (
      <div className="relative block">
      <select className="w-[161px] ps-4 h-[46px] rounded-xl outline-none text-[14px] cursor-pointer border appearance-none md:w-full">
        <option value="" selected>Pilih Bulan</option>
        {months.map((data) => (
          <option className="">{data}</option>
        ))}
        
      </select>
      <img className="absolute top-3 right-4 z-[1]" src="./static/images/icons/angle-down.png" alt="" />
      </div>
    )
  },
  YearOption: () => {
    return (
      <div className="relative block">
      <select className="w-[161px] ps-4 h-[46px] rounded-xl outline-none text-[14px] cursor-pointer border appearance-none md:w-full">
        <option value="" selected>Pilih Tahun</option>
        {years.map((data) => (
          <option className="">{data}</option>
        ))}
        
      </select>
      <img className="absolute top-3 right-4 z-[1]" src="./static/images/icons/angle-down.png" alt="" />
      </div>
    )
  },
}

export default Options
