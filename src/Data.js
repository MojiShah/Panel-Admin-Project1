let Monthes = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Agu',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

let userImages = [
    { id: 1, img: 'images/Moji1.jpeg' },
    { id: 2, img: 'images/Moji2.jpg' },
    { id: 3, img: 'images/Moji3.jpg' },
    { id: 4, img: 'images/Moji4.jpg' },
    { id: 5, img: 'images/Reza.jpeg' },
    { id: 6, img: 'images/Elnaz.jpeg' },
    { id: 7, img: 'images/Ehsan-Manzari.png' },
    { id: 8, img: 'images/1.jpeg' },
    { id: 9, img: 'images/2.jpeg' },
    { id: 10, img: 'images/3.jpeg' },
    { id: 11, img: 'images/4.jpeg' },
    { id: 12, img: 'images/5.jpeg' },
    { id: 13, img: 'images/6.jpeg' },
    { id: 14, img: 'images/7.jpeg' },
];

let customerImages = [
    { id: 1, img: 'images/Moji1.jpeg' },
    { id: 2, img: 'images/Moji2.jpg' },
    { id: 3, img: 'images/Moji3.jpg' },
    { id: 6, img: 'images/Elnaz.jpeg' },
    { id: 4, img: 'images/Moji4.jpg' },
    { id: 5, img: 'images/Reza.jpeg' },
];

let myVisibility = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: true },
    { id: 4, value: true },
    { id: 5, value: true },
];

let products = [
    {
        id: 1,
        avatar: 'images/laptop/01Acer_Predator TRITON 300 SE_54500.jpg',
        name: 'Acer Predator 300',
        price: 54_500_000
    },
    {
        id: 2,
        avatar: 'images/laptop/02Acer_Aspire 3 A315-59G_27720.jpg',
        name: 'Acer Aspire 3 A315',
        price: 27_720_000
    },
    {
        id: 3,
        avatar: 'images/laptop/03Acer_Nitro 5 AN515-45-R56R_39999.jpg',
        name: 'Acer Nitro 5 AN515',
        price: 39_999_000
    },
    {
        id: 4,
        avatar: 'images/laptop/04Acer_Aspire 5 A515-57G_40200.jpg',
        name: 'Acer Aspire 5 A515',
        price: 40_200_000
    },
    {
        id: 5,
        avatar: 'images/laptop/05HP_Victus 15 FA1093DX_36070.jpg',
        name: 'HP Victus 15',
        price: 36_070_000
    },
    {
        id: 6,
        avatar: 'images/laptop/06HP_Victus 15 FA1093DX_47500.jpg',
        name: 'HP Victus 16',
        price: 47_500_000
    },
    {
        id: 7,
        avatar: 'images/laptop/07HP_Spectre x360 14-EF 2013dx_75090.jpg',
        name: 'HP Spectre x360',
        price: 75_090_000
    },
    {
        id: 8,
        avatar: 'images/laptop/08HP_Victus 15 FA1093DX_39800.jpg',
        name: 'HP Victus 17',
        price: 39_800_000
    },
    {
        id: 9,
        avatar: 'images/laptop/09Dell_XPS 13 9315_75999200.jpg',
        name: 'Dell XPS 13 9315',
        price: 75_999_200
    },
    {
        id: 10,
        avatar: 'images/laptop/10Dell_latitude 3410 ci_18299.jpg',
        name: 'Dell latitude 3410 ',
        price: 18_299_000
    },
    {
        id: 11,
        avatar: 'images/laptop/11Dell_Vostro 3515-R3_20900.jpg',
        name: 'Dell_Vostro 3515',
        price: 20_900_000
    },
    {
        id: 12,
        avatar: 'images/laptop/12Dell_Inspiron 3511_32900.jpg',
        name: 'Dell Inspiron 3511',
        price: 32_900_000
    },
    {
        id: 13,
        avatar: 'images/laptop/13Lenovo_LOQ 15IRH8_50990.jpg',
        name: 'Lenovo LOQ 15IRH8',
        price: 50_990_000
    },
    {
        id: 14,
        avatar: 'images/laptop/14Lenovo_V15 IGL - N4020_9750.jpg',
        name: 'Lenovo V15 IGL',
        price: 9_750_000
    },
    {
        id: 15,
        avatar: 'images/laptop/15Lenovo_V15 G4 AMN-Athlon_14730.jpg',
        name: 'Lenovo V15 G4 AMN-Athlon',
        price: 14_730_000
    },
    {
        id: 16,
        avatar: 'images/laptop/16Lenovo_IdeaPad 3 15ITL6_26699.jpg',
        name: 'Lenovo IdeaPad 3 15ITL6',
        price: 26_699_000
    },
    {
        id: 17,
        avatar: 'images/laptop/17Asus_ROG Strix G513IE_45000.jpg',
        name: 'Asus ROG Strix G513IE',
        price: 45_000_000
    },
    {
        id: 18,
        avatar: 'images/laptop/18Asus_ZenBook Pro Duo 14_97999.jpg',
        name: 'Asus ZenBook Pro Duo 14',
        price: 97_999_000
    },
    {
        id: 19,
        avatar: 'images/laptop/19Asus_TUF Gaming F15 FX506HC_38950.jpg',
        name: 'Asus TUF Gaming F15',
        price: 38_950_000
    },
    {
        id: 20,
        avatar: 'images/laptop/20Asus_X515EA-EJ1314_23750.jpg',
        name: 'Asus Asus_X515EA',
        price: 23_750_000
    }
];

const productsSales = [
    {
        month: 'Jan',
        sales: 4000
    },
    {
        month: 'Feb',
        sales: 800
    },
    {
        month: 'Mar',
        sales: 4500
    },
];


export { Monthes, userImages, customerImages, myVisibility, products, productsSales };