import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliar from '../Auxilar/Auxiliar';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrapperComponent, axios) => {
    return props => {
        const [error, clearError] = useHttpErrorHandler(axios);

        return (
            <Auxiliar>
                <Modal show={error}
                    modalClosed={clearError}>
                    {error ? error.message : null}
                </Modal>
                <WrapperComponent {...props} />
            </Auxiliar>
        )
    }
}

export default withErrorHandler;