import React from 'react';

interface Props{
    params:{
        adminId: number
    }
}

const UpdateAdmin = (props: Props) => {
    const {adminId} = props.params
    return (
        <div>
            U A {adminId}
        </div>
    );
};

export default UpdateAdmin;