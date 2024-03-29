import { SHOW_TOAST } from "../constants/actionTypes";
import { toast, Flip } from "react-toastify";

const reactToastifyDefaultOptions = {
  autoClose: 6000,
  closeButton: false,
  type: toast.TYPE.SUCCESS,
  hideProgressBar: false,
  position: toast.POSITION.TOP_RIGHT,
  transition: Flip,
  className: "black-background",
  progressClassName: "fancy-progress-bar"
};

const toastMiddleware = () => next => action => {
  next(action);

  if (action.type !== SHOW_TOAST) return;

  const { message, type } = action.payload;
  toast(message, {
    ...reactToastifyDefaultOptions,
    type
  });
};

export default toastMiddleware;
