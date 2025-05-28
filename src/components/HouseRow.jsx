import currencyFormatter from "../helpers/currencyFormatter";
const HouseRow = ({ house }) => {
    return (
        <tr>
            <td>{house.title}</td>
            <td>{house.country}</td>
            <td>{currencyFormatter.format(house.price)}</td>
        </tr>
    );
}

export default HouseRow;