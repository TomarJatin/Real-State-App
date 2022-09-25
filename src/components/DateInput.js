
import { AiOutlineCalendar } from 'react-icons/ai';

const DateInput = () => {
  return (
    <div className='dropdown relative'>
        <div className='dropdown-btn w-full text-left'>
            <AiOutlineCalendar className='dropdown-icon-secondary ml-0 mr-[8px]' />
            <input datepicker type="text" className='placeholder:text-[14px] placeholder:font-medium placeholder:leading-tight placeholder:text-slate-900 border-0' placeholder="Select Move-in date" onfocus="(this.type='date')"/>
         </div>
    </div>
  )
}

export default DateInput