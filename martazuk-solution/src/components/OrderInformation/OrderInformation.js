import "./OrderInformation.css"
import React, {useState} from "react";
import useInputState from "../../hooks/useInputState";
import {Box} from "@mui/material";
import {createRequest} from "../../services/request-service";
import BaseButton from "../Commons/BaseButton";
import OrderInformationSelectRow from "./OrderInformationSelectRow";
import {getTypesArray} from "../../utils/orderUtils";
import OrderInformationInputRow from "./OrderInformationInputRow";
import CustomizedTimeInput from "../../hooks/CustomizedTimeInput";
import useSnackbar from "../../hooks/useSnackbar";
import CustomSnackbar from "../Commons/CustomSnackbar";

const OrderInformation = ({setResponseName, setResponseId, setResponseType, setResponseSpiciness_scale, setResponseSlices_of_bread,
                              setResponseNo_of_slices, setResponseDiameter, setResponsePreparation_time}) => {
    const [name, setName, , nameError, setNameError] = useInputState("");
    const [preparationTime, setPreparationTime, , preparationTimeError, setPreparationTimeError, , preparationTimeOnBlur] = useInputState("");
    const [type, setType, , typeError, setTypeError] = useInputState("");
    const [no_of_slices, setNo_of_slices, , no_of_slicesError, setNo_of_slicesError] = useInputState("");
    const [diameter, setDiameter, , diameterError, setDiameterError] = useInputState(" ");
    const [spiciness_scale, setSpiciness_scale, , spiciness_scaleError, setSpiciness_scaleError] = useInputState("");
    const [slices_of_bread, setSlices_of_bread, , slices_of_breadError, setSlices_of_breadError] = useInputState("");
    const [isLoading, setIsLoading] = useState(false);
    const [snackbar, , closeSnackbar, handleError] = useSnackbar();

    const handleRequestInformation = e => {

        e.preventDefault();
        if (!isOrderValid()) {
            return;
        }
        setIsLoading(prevState => !prevState);

        let newRequest;
        if(type === "pizza"){
            newRequest = {
                name: name,
                preparation_time: preparationTime,
                type: type,
                no_of_slices: no_of_slices,
                diameter: diameter
            };
        }
        if(type === "soup"){
            newRequest = {
                name: name,
                preparation_time: preparationTime,
                type: type,
                spiciness_scale: spiciness_scale
            };
        }
        if(type === "sandwich"){
            newRequest = {
                name: name,
                preparation_time: preparationTime,
                type: type,
                slices_of_bread: slices_of_bread
            };
        }
        createRequest(newRequest)
            .then(response => {setResponseName(response.name)
                setResponseId(response.id)
                setResponseType(response.type)
                setResponseSpiciness_scale(response.spiciness_scale)
                setResponseSlices_of_bread(response.slices_of_bread)
                setResponseNo_of_slices(response.no_of_slices)
                setResponseDiameter(response.diameter)
                setResponsePreparation_time(response.preparation_time)})
            .catch(handleError)
            .finally(() => setIsLoading(prevState => !prevState));
    }
    const isOrderValid = () => {
        resetErrors();

        let isValid = true;
        if (!name) {
            setNameError("Please enter name.");
            isValid = false;
        }
        if (name.length < 3) {
            setNameError("Please enter at least 3 characters.");
            isValid = false;
        }
        if (!type) {
            setTypeError("Please enter type.");
            isValid = false;
        }
        if (type === "pizza" && !/^\d+$/.test(no_of_slices)) {
            setNo_of_slicesError("Please enter number of slices.");
            isValid = false;
        }
        if (type === "pizza" && !/^\d+$/.test(diameter)) {
            setDiameterError("Please enter diameter.");
            isValid = false;
        }

        if (type === "soup" && !/^(?:[1-9]|10)$/.test(spiciness_scale)) {
            setSpiciness_scaleError("Please enter spiciness scale from 1 to 10.");
            isValid = false;
        }
        if (type === "sandwich" && !/^\d+$/.test(slices_of_bread)) {
            setSlices_of_breadError("Please enter number of slices.");
            isValid = false;
        }

        const regex_preparationTime = /^([01]?\d|2[0-3]):([0-5]?\d):([0-5]?\d)$/;
        if (!regex_preparationTime.test(preparationTime)) {
            setPreparationTimeError("Please enter preparation time in format HH:MM:SS.");
            isValid = false;
        }
        return isValid;
    }
    const resetErrors = () => {
        setNameError("");
        setTypeError("");
        setNo_of_slicesError("");
        setDiameterError("");
        setSpiciness_scaleError("");
        setSlices_of_breadError("");
        setPreparationTimeError("");
    }

    let no_of_slicesField;
    let diameterField;
    let spiciness_scaleField;
    let slices_of_breadField;

    if (type === "pizza") {
        no_of_slicesField = <OrderInformationInputRow header="Number of slices"
                                                      value={no_of_slices}
                                                      setValue={setNo_of_slices}
                                                      error={no_of_slicesError}/>
        diameterField = <OrderInformationInputRow header="Diameter"
                                                  value={diameter}
                                                  setValue={setDiameter}
                                                  error={diameterError}/>
    }
    if (type === "soup") {
        spiciness_scaleField = <OrderInformationInputRow header="Spiciness scale (1-10)"
                                                         value={spiciness_scale}
                                                         setValue={setSpiciness_scale}
                                                         error={spiciness_scaleError}/>

    }
    if (type === "sandwich") {
        slices_of_breadField = <OrderInformationInputRow header="Number of bread slices"
                                                         value={slices_of_bread}
                                                         setValue={setSlices_of_bread}
                                                         error={slices_of_breadError}/>

    }
    return (
        <div className="orderDetailsDiv">
            <div>
                <OrderInformationInputRow header="Name"
                                          value={name}
                                          setValue={setName}
                                          error={nameError}/>
                <OrderInformationSelectRow header="Type"
                                           value={type}
                                           setValue={setType}
                                           selectValuesMap={getTypesArray()}
                                           error={typeError}/>
                {no_of_slicesField}
                {diameterField}
                {spiciness_scaleField}
                {slices_of_breadField}
                <CustomizedTimeInput header="Time for preparation"
                                     value={preparationTime}
                                     setValue={setPreparationTime}
                                     error={preparationTimeError}
                                     onBlur={preparationTimeOnBlur}/>

            </div>
            <Box>
                <BaseButton text="Create Request" onClick={handleRequestInformation} loading={isLoading}/>
            </Box>
            <CustomSnackbar
                open={snackbar.open}
                type={snackbar.type}
                onClose={closeSnackbar}
                message={snackbar.message}/>
        </div>
    )


}
export default OrderInformation
