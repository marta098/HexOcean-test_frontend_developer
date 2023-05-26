import React from 'react';
import {FormControl, FormHelperText, TextField, Typography} from "@mui/material";


const OrderInformationInputRow = ({header, value, setValue, error}) => {

    let isErrorVisible = false;
    if (error && error !== "") {
        isErrorVisible = true
    }

    return (
        <div className="order-details-row">
            <div className="order-details-column">
                <Typography variant="h6">{header}:</Typography>
            </div>
            <div className="order-details-column">
                <FormControl error={isErrorVisible}>
                    <TextField style={{width: "100%", backgroundColor: "whitesmoke"}} className="middle-column-content"
                               value={value}
                               onChange={setValue}
                               error={error && error !== ""}
                               />
                    {isErrorVisible && <FormHelperText style={{fontWeight: "bold", width: "100%"}}>{error}</FormHelperText>}
                </FormControl>
            </div>
        </div>
    );
};

export default OrderInformationInputRow;
