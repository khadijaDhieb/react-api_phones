import React, { useContext, useEffect } from "react";
import { Phone } from "./Phone";
import { GlobalContext } from '../context/GlobalContext';
import { getPhones } from '../actions/phoneActions';
import PhonesApiService from '../services/PhonesApiService'

export const PhonesList = () => {

  const { phones, dispatch } = useContext(GlobalContext);
// remplir la liste des phones ici 
  useEffect(() => {
    PhonesApiService.getAll()
      .then(res => {
        dispatch(getPhones(res.data))
      })
      .catch(e => console.log(e));

  }, []
  );
  return (
    <React.Fragment>
      <h3>Phones List </h3>
      <ul>
        {phones.map(phone => (
          <Phone key={phone.id} phone={phone} />
        ))}
      </ul>
    </React.Fragment>
  );
};
