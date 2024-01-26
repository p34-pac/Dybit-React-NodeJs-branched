import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function PriceListStatic() {
  return (
    <Table responsive="sm" bordered hover striped>
        <thead>
          <tr>
            <th className="text-center" style={{ backgroundColor: 'rgba(230, 201, 24, 1)' }}>Grade</th>
            <th className="text-center" style={{ backgroundColor: 'rgba(230, 201, 24, 1)' }}>task funds</th>
            <th className="text-center" style={{ backgroundColor: 'rgba(230, 201, 24, 1)' }}>team number</th>
            <th className="text-center" style={{ backgroundColor: 'rgba(230, 201, 24, 1)' }}>income</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">Level 0</td>
            <td className="text-center">6000</td>
            <td className="text-center">0</td>
            <td className="text-center">2.5%</td>
          </tr>
          <tr>
            <td className="text-center">Level 1</td>
            <td className="text-center">12000</td>
            <td className="text-center">3</td>
            <td className="text-center">3.3%</td>
          </tr>
          <tr>
            <td className="text-center">Level 2</td>
            <td className="text-center">18000</td>
            <td className="text-center">6</td>
            <td className="text-center">3.7%</td>
          </tr>
          <tr>
          <td className="text-center">Level 3</td>
          <td className="text-center">22000</td>
          <td className="text-center">10</td>
          <td className="text-center">4.0%</td>
        </tr>
        <tr>
            <td className="text-center">Level 4</td>
            <td className="text-center">35000</td>
            <td className="text-center">20</td>
            <td className="text-center">4.5%</td>
        </tr>
        <tr>
        <td className="text-center">Level 5</td>
        <td className="text-center">80000</td>
        <td className="text-center">40</td>
        <td className="text-center">5.2%</td>
        </tr>
         <tr>
              <td className="text-center">Level 6</td>
              <td className="text-center">350000</td>
              <td className="text-center">70</td>
              <td className="text-center">5.8%</td>
        </tr> 
        <tr>
        <td className="text-center">Level 7</td>
        <td className="text-center">600000</td>
        <td className="text-center">100</td>
        <td className="text-center">6.4%</td>
        </tr>
        <tr>
              <td className="text-center">Level 8</td>
              <td className="text-center">900000</td>
              <td className="text-center">150</td>
              <td className="text-center">8.0%</td>
        </tr>
        <tr>
        <td className="text-center">Level 9</td>
        <td className="text-center">1500000</td>
        <td className="text-center">200</td>
        <td className="text-center">11.0%</td>
      </tr>   
        </tbody>
      </Table>
  );
}

export default PriceListStatic;