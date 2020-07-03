import React, { useState } from "react";
import ModalTest from "../../components/ModalSolution";

export default function () {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="container">
            <ModalTest
                isVisible={true}
            >
                <h2>Demo Modal</h2>
                <form>
                    <input type="text" />
                </form>
            </ModalTest>

            <button
                onClick={() => {
                    setOpenModal(true);
                }}>Open Modal</button>
        </div>
    )
}