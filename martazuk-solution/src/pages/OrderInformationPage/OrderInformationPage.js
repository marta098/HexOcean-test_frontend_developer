import {Box, Typography} from "@mui/material";
import "../../styles/styles.css"

import OrderInformation from "../../components/OrderInformation/OrderInformation";
import React, {useState} from "react";
import OrderResponse from "../../components/OrderResponse/OrderResponse";

const OrderInformationPage = () => {

    const [responseName, setResponseName] = useState("");
    const [responseId, setResponseId] = useState("");
    const [responseType, setResponseType] = useState("");
    const [responseSpiciness_scale, setResponseSpiciness_scale] = useState("");
    const [responseSlices_of_bread, setResponseSlices_of_bread] = useState("");
    const [responseNo_of_slices, setResponseNo_of_slices] = useState("");
    const [responseDiameter, setResponseDiameter] = useState("");
    const [responsePreparation_time, setResponsePreparation_time] = useState("");

    return (
        <Box>
            <div className="background split left"/>
            <div className="left split">
            <div className="centered">
                <Typography
                    variant="h4"
                    style={{alignSelf: "center", marginLeft: "40%", marginRight: "70%", marginBottom: "10%"}}>
                    Order</Typography>
                <div>
                    <Box>
                        <OrderInformation setResponseName={setResponseName}
                                          setResponseId={setResponseId}
                                          setResponseType={setResponseType}
                                          setResponseSpiciness_scale={setResponseSpiciness_scale}
                                          setResponseSlices_of_bread={setResponseSlices_of_bread}
                                          setResponseNo_of_slices={setResponseNo_of_slices}
                                          setResponseDiameter={setResponseDiameter}
                                          setResponsePreparation_time={setResponsePreparation_time}/>
                    </Box>
                </div>
            </div>

        </div>
            <div className="split right">
                <div className="centered">
                    <Typography
                        variant="h4"
                        style={{alignSelf: "center", marginLeft: "40%", marginRight: "70%", marginBottom: "10%"}}>
                        Response</Typography>
                    <Box>
                        <OrderResponse responseName={responseName}
                                       responseId={responseId}
                                       responseType={responseType}
                                       responseSpiciness_scale={responseSpiciness_scale}
                                       responseSlices_of_bread={responseSlices_of_bread}
                                       responseNo_of_slices={responseNo_of_slices}
                                       responseDiameter={responseDiameter}
                                       responsePreparation_time={responsePreparation_time}/>
                    </Box>
                </div>
            </div>
        </Box>

    );
}
export default OrderInformationPage;
