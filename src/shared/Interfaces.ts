export interface ICardProps {
    name: string;
    rentable: boolean;
    jahr: number;
    power: number;
    accelaration: number
}

export interface ISideBar {
    isOpen: boolean | null;
    onClose: (value: undefined | boolean) => void;
}

export interface IHoliday {
    name: string;
    date: string;
}