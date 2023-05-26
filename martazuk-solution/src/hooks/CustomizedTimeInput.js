import {FormControl,FormHelperText, TextField, Typography} from "@mui/material";

const CustomizedTimeInput = ({header, value, setValue, error, onBlur}) => {

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
                <FormControl  error={isErrorVisible}>
                    <TextField style={{width: "100%", backgroundColor: "whitesmoke"}} className="middle-column-content"
                               type="text"
                               value={value}
                               onChange={setValue}
                               error={error && error !== ""}
                               onBlur={onBlur}
                               />
                    {isErrorVisible && <FormHelperText style={{fontWeight: "bold", width: "100%"}}>{error}</FormHelperText>}
                </FormControl>
            </div>
        </div>
    );
};
export default CustomizedTimeInput
