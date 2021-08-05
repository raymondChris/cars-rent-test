import Holidays from '../holidays.json'
import { IHoliday } from '../shared/Interfaces'

// function that check if today is holiday
const checkHoliday: () => IHoliday | undefined = () => {
    const today = new Date().toDateString();
    const holiday = Holidays.find(date => new Date(date.date).toDateString() === today )
    return holiday
}

export default checkHoliday