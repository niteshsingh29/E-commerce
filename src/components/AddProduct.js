import React, { useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addProducts } from "../Redux/addProducts";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [foodType, setFoodType] = useState();

  const dispatch = useDispatch();

  const paperStyle = {
    padding: "50px 150px",
    width: 500,
    margin: "150px auto",
  };
  const paperStyle1 = {
    marginLeft: "0px",
  };
  const [state, setState] = useState({
    title: "",
    price: "",
    rating: "",
    link: "",
  });
  console.log(`state of product`, state);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const createProduct = () => {
    try {
      dispatch(addProducts(state));
      toast.success(`Product added successfully`);
      setState({
        title: "",
        price: "",
        rating: "",
        link: "",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      <Grid>
        <div className="formm">
          <Paper elevation={10} style={paperStyle}>
            <h2>Create Product</h2>
            <Typography variant="caption">Create Now!</Typography>
            <div className="formmm mt-4">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                style={paperStyle1}
              >
                <h5 className="mt-2">Product Title</h5>
                <TextField
                  name="title"
                  id="outlined-basic"
                  label="title"
                  variant="outlined"
                  value={state.title}
                  onChange={handleChange}
                />
              </Box>
            </div>
            <br />
            <div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                style={paperStyle1}
              >
                <h5 className="mt-2">Product Price</h5>
                <TextField
                  name="price"
                  id="outlined-basic"
                  label="price in Rs"
                  variant="outlined"
                  type="number"
                  value={state.price}
                  onChange={handleChange}
                />
              </Box>
            </div>
            <br />

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              style={paperStyle1}
            >
              <h5 className="mt-2">Product Rating</h5>
              <TextField
                name="rating"
                id="outlined-basic"
                label="rating"
                variant="outlined"
                type="number"
                value={state.rating}
                onChange={handleChange}
              />
            </Box>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              style={paperStyle1}
            >
              <h5 className="mt-2">Product Image</h5>
              <TextField
                name="link"
                id="outlined-basic"
                label="Image Link"
                variant="outlined"
                value={state.link}
                onChange={handleChange}
              />
            </Box>

            <br />
            <br />
            <br />

            <Button
              className="btn btn-primary text-white bg-primary"
              type="Submit"
              value="SignUp"
              onClick={createProduct}
            >
              Create Now!
            </Button>
          </Paper>
        </div>
      </Grid>
    </>
  );
};
export default AddProduct;
