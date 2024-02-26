// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Spinner } from 'react-bootstrap';
import Style from '../css/Loading.module.css';

function Loading() {
  return (
    <div className={Style.loadingWrap}>
      <div className={Style.spinnerWrap}>
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="border" variant="light" />
      </div>
      <h1 className={Style.title}>Now Loading</h1>
    </div>
  );
}
export default Loading;
