import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const actionBar = (
		<div>
			<Button onClick={handleClose} primary>
				Accept
			</Button>
		</div>
	);
	const modal = (
		<Modal onClose={handleClose} actionBar={actionBar}>
			<p>Here is an important agreement for you to accept</p>
		</Modal>
	);
	return (
		<div>
			<Button onClick={handleClick} primary>
				Open Modal
			</Button>
			{showModal && modal}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
				condimentum, purus sed placerat ullamcorper, erat ligula gravida lacus,
				tempor auctor velit massa et felis. Curabitur sed lectus et ante
				porttitor volutpat. Ut eleifend dapibus erat sit amet iaculis.
				Suspendisse potenti. Nullam id justo ut justo gravida mollis. Donec
				justo felis, hendrerit quis fringilla quis, faucibus vitae ligula.
				Curabitur mollis vulputate nulla sed auctor. Cras id tortor tortor.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
				condimentum, purus sed placerat ullamcorper, erat ligula gravida lacus,
				tempor auctor velit massa et felis. Curabitur sed lectus et ante
				porttitor volutpat. Ut eleifend dapibus erat sit amet iaculis.
				Suspendisse potenti. Nullam id justo ut justo gravida mollis. Donec
				justo felis, hendrerit quis fringilla quis, faucibus vitae ligula.
				Curabitur mollis vulputate nulla sed auctor. Cras id tortor tortor.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
				condimentum, purus sed placerat ullamcorper, erat ligula gravida lacus,
				tempor auctor velit massa et felis. Curabitur sed lectus et ante
				porttitor volutpat. Ut eleifend dapibus erat sit amet iaculis.
				Suspendisse potenti. Nullam id justo ut justo gravida mollis. Donec
				justo felis, hendrerit quis fringilla quis, faucibus vitae ligula.
				Curabitur mollis vulputate nulla sed auctor. Cras id tortor tortor.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
				condimentum, purus sed placerat ullamcorper, erat ligula gravida lacus,
				tempor auctor velit massa et felis. Curabitur sed lectus et ante
				porttitor volutpat. Ut eleifend dapibus erat sit amet iaculis.
				Suspendisse potenti. Nullam id justo ut justo gravida mollis. Donec
				justo felis, hendrerit quis fringilla quis, faucibus vitae ligula.
				Curabitur mollis vulputate nulla sed auctor. Cras id tortor tortor.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
				condimentum, purus sed placerat ullamcorper, erat ligula gravida lacus,
				tempor auctor velit massa et felis. Curabitur sed lectus et ante
				porttitor volutpat. Ut eleifend dapibus erat sit amet iaculis.
				Suspendisse potenti. Nullam id justo ut justo gravida mollis. Donec
				justo felis, hendrerit quis fringilla quis, faucibus vitae ligula.
				Curabitur mollis vulputate nulla sed auctor. Cras id tortor tortor.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
				condimentum, purus sed placerat ullamcorper, erat ligula gravida lacus,
				tempor auctor velit massa et felis. Curabitur sed lectus et ante
				porttitor volutpat. Ut eleifend dapibus erat sit amet iaculis.
				Suspendisse potenti. Nullam id justo ut justo gravida mollis. Donec
				justo felis, hendrerit quis fringilla quis, faucibus vitae ligula.
				Curabitur mollis vulputate nulla sed auctor. Cras id tortor tortor.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
				condimentum, purus sed placerat ullamcorper, erat ligula gravida lacus,
				tempor auctor velit massa et felis. Curabitur sed lectus et ante
				porttitor volutpat. Ut eleifend dapibus erat sit amet iaculis.
				Suspendisse potenti. Nullam id justo ut justo gravida mollis. Donec
				justo felis, hendrerit quis fringilla quis, faucibus vitae ligula.
				Curabitur mollis vulputate nulla sed auctor. Cras id tortor tortor.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
				condimentum, purus sed placerat ullamcorper, erat ligula gravida lacus,
				tempor auctor velit massa et felis. Curabitur sed lectus et ante
				porttitor volutpat. Ut eleifend dapibus erat sit amet iaculis.
				Suspendisse potenti. Nullam id justo ut justo gravida mollis. Donec
				justo felis, hendrerit quis fringilla quis, faucibus vitae ligula.
				Curabitur mollis vulputate nulla sed auctor. Cras id tortor tortor.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
				condimentum, purus sed placerat ullamcorper, erat ligula gravida lacus,
				tempor auctor velit massa et felis. Curabitur sed lectus et ante
				porttitor volutpat. Ut eleifend dapibus erat sit amet iaculis.
				Suspendisse potenti. Nullam id justo ut justo gravida mollis. Donec
				justo felis, hendrerit quis fringilla quis, faucibus vitae ligula.
				Curabitur mollis vulputate nulla sed auctor. Cras id tortor tortor.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
				condimentum, purus sed placerat ullamcorper, erat ligula gravida lacus,
				tempor auctor velit massa et felis. Curabitur sed lectus et ante
				porttitor volutpat. Ut eleifend dapibus erat sit amet iaculis.
				Suspendisse potenti. Nullam id justo ut justo gravida mollis. Donec
				justo felis, hendrerit quis fringilla quis, faucibus vitae ligula.
				Curabitur mollis vulputate nulla sed auctor. Cras id tortor tortor.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
				condimentum, purus sed placerat ullamcorper, erat ligula gravida lacus,
				tempor auctor velit massa et felis. Curabitur sed lectus et ante
				porttitor volutpat. Ut eleifend dapibus erat sit amet iaculis.
				Suspendisse potenti. Nullam id justo ut justo gravida mollis. Donec
				justo felis, hendrerit quis fringilla quis, faucibus vitae ligula.
				Curabitur mollis vulputate nulla sed auctor. Cras id tortor tortor.
			</p>
		</div>
	);
}

export default ModalPage;
