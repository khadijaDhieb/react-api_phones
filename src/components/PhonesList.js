import React, { useState, useContext, useEffect } from "react";
import { Phone } from "./Phone";
import { GlobalContext } from '../context/GlobalContext';
import { getPhones } from '../actions/phoneActions';
import PhonesApiService from '../services/PhonesApiService'
import { SerachForm } from "./SerachForm";
import { TestForm } from "./TestForm";

export const PhonesList = () => {

  const { phones, dispatch } = useContext(GlobalContext);
  const [phonesFiltred, setPhonesFiltred] = useState([]);

  // remplir la liste des phones ici 
  useEffect(() => {
    PhonesApiService.getAll()
      .then(res => {
        dispatch(getPhones(res.data))
      })
      .catch(e => console.log(e));

  }, []
  );

  function handleSearch(name) {
    let result = phones.filter(phone => phone.name === name);
    setPhonesFiltred(result);

  }

  console.log(phonesFiltred)

  return (
    <React.Fragment>
      <h3>Phones List </h3>
      <SerachForm handleSearch={handleSearch}></SerachForm>
      {/* <TestForm></TestForm> */}

      {phonesFiltred.length > 0 ?
        <ul>
          {phonesFiltred.map(phone => (
            <Phone key={phone.id} phone={phone} />
          ))}
        </ul> 
        :
        <ul>
          {phones.map(phone => (
            <Phone key={phone.id} phone={phone} />
          ))}
        </ul>
      }

    </React.Fragment>
  );
};
