import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

export default function BasicRating({ rating, isEditing, setUpdatedValue, updatedValue }) {
    const [value, setValue] = useState(rating);

    return (
        <Box
            sx={{
                "& > legend": { mt: 2 },
            }}
        >{isEditing ?
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    setUpdatedValue({
                        ...updatedValue,
                        rating: newValue,
                    })
                }}
            /> :
            <Rating name="half-rating-read" value={value} precision={0.5} readOnly />
            }
        </Box>
    );
}
