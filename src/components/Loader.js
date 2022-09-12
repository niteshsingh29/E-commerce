import React from 'react';
import PlaceholderLoading from 'react-placeholder-loading'

const CustomLoader = () => {
    return (
        <>
            <div className="spinner d-flex mt-5 flex-md-row">
                {
                    [1, 2, 3].map((item) => {
                        return (
                            <>
                                <div className="mx-5">
                                    <div className="mt-3 mb-3 text-center d-flex">
                                        <div>
                                            <PlaceholderLoading shape="circle" width={45} height={45} />
                                        </div>
                                        <div className="d-flex flex-column justify-content-between mx-3">
                                            <PlaceholderLoading shape="rect" width={150} height={20} />
                                            <PlaceholderLoading shape="rect" width={100} height={20} />
                                        </div>
                                    </div>
                                    <PlaceholderLoading shape="rect" width={270} height={200} />
                                    <div className="mt-3">
                                        <PlaceholderLoading shape="rect" width={100} height={20} />
                                    </div>
                                    <div className="mt-3">
                                        <PlaceholderLoading shape="rect" width={270} height={20} />
                                    </div>
                                    <div className="mt-3 text-center">
                                        <PlaceholderLoading shape="rect" width={130} height={30} />
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>

    )
}
export default CustomLoader;    