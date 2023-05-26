import React from 'react';
import {Box} from "@mui/material";
import OrderInformationInputRow from "../OrderInformation/OrderInformationInputRow";

const OrderResponse = ({
                           responseName, responseId, responseType, responseSpiciness_scale, responseSlices_of_bread,
                           responseNo_of_slices, responseDiameter,responsePreparation_time
                       }) => {

    let slices_of_breadField;
    let spiciness_scaleField;
    let no_of_slicesField;
    let diameterField;

    if (responseType === "pizza") {
        no_of_slicesField = <OrderInformationInputRow header="Number of slices"
                                                      value={responseNo_of_slices}/>
        diameterField = <OrderInformationInputRow header="Diameter"
                                                  value={responseDiameter}/>
    }
    if (responseType === "sandwich") {
        slices_of_breadField = <OrderInformationInputRow header="Number of bread slices"
                                                         value={responseSlices_of_bread}/>
    }

    if (responseType === "soup") {
        spiciness_scaleField = <OrderInformationInputRow header="Spiciness scale (1-10)"
                                                         value={responseSpiciness_scale}/>
    }
    return (
        <Box>
            <OrderInformationInputRow header="Id"
                                      value={responseId}/>
            <OrderInformationInputRow header="Name"
                                      value={responseName}/>
            <OrderInformationInputRow header="Type"
                                      value={responseType}/>
            {spiciness_scaleField}
            {slices_of_breadField}
            {no_of_slicesField}
            {diameterField}
            <OrderInformationInputRow header="Preparation time"
                                      value={responsePreparation_time}/>
        </Box>
    );
}
export default OrderResponse;
