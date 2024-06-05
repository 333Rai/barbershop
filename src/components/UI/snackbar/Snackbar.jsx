import { Alert, Snackbar as MuiSnackbar } from '@mui/material';
import React from 'react';

const Snackbar = ({ open, message, severity, handleClose, Transition }) => {
	return (
		<MuiSnackbar
			open={open}
			autoHideDuration={3333}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			onClose={handleClose}
			TransitionComponent={Transition}
		>
			<Alert
				onClose={handleClose}
				severity={severity}
				variant='standard'
				sx={{ width: '100%' }}
			>
				{message}
			</Alert>
		</MuiSnackbar>
	);
};

export default Snackbar;
