import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicRating from "./Rating";
import { toast } from "react-toastify";
import axios from "axios";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal({
    isModalOpened,
    setModalOpened,
    updatedValue,
    setUpdatedValue,
    productList,
    setProductList,
    item,
    setAnchorEl
}) {
    const handleChange = (e) => {
        e.preventDefault();
        setUpdatedValue({
            ...updatedValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = async (e, item) => {
        let payload = {
            title: updatedValue.title,
            description: updatedValue.description,
            price: updatedValue.price,
            rating: updatedValue.rating,
        };
        const { data } = await axios.put(
            `https://dummyjson.com/products/${item.id}`,
            payload
        );
        console.log(`updatedData`, data);
        setProductList(() => {
            let newUpdatedProduct = [];
            productList?.map((i) => {
                if (i.id !== item.id) {
                    newUpdatedProduct.push(i);
                } else {
                    newUpdatedProduct.push(data);
                }
            });
            return newUpdatedProduct;
        });
        setModalOpened(false);
        setAnchorEl(null)
        toast.success(`Edited successfully!`);
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isModalOpened}
                onClose={() => setModalOpened(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isModalOpened}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Edit Product Now!
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <>
                                <div>Update Title</div>
                                <input
                                    className="mx-1"
                                    type="text"
                                    value={updatedValue.title}
                                    onChange={handleChange}
                                    name="title"
                                    placeholder="Title"
                                />
                            </>
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <>
                                <div>Update Price</div>
                                <input
                                    className="mx-1"
                                    type="number"
                                    value={updatedValue.price}
                                    onChange={handleChange}
                                    name="price"
                                />
                            </>
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <>
                                <div>Update Rating</div>
                                <BasicRating
                                    rating={updatedValue.rating}
                                    isEditing={isModalOpened}
                                    setUpdatedValue={setUpdatedValue}
                                    updatedValue={updatedValue}
                                />
                            </>
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <div className="d-flex">
                                <button
                                    className="btn btn-dark"
                                    onClick={(e) => handleSave(e, item)}
                                >
                                    Save
                                </button>
                                <button
                                    className="btn btn-danger mx-3"
                                    onClick={() => { setModalOpened(false); toast.error(`Canceled Editing`); setAnchorEl(null) }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
