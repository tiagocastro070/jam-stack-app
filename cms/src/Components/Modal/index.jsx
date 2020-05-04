import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md'

import './index.scss';

export default function Modal(props) {

  const [show, setShow] = useState(false)
  
  useEffect(() => {
    setShow(!props.show)
  }, [props])

  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={props.toggle}>
      <div className={`modal-dialog modal-dialog-centered ${props.size ? `modal-${props.size}` : ''}`} onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.toggle}>
              <MdClose color='white' size='20' />
            </button>
          </div>
          <div className="modal-body">
            {props.children}
          </div>
          <div className="modal-footer">
            {props.footer}
          </div>
        </div>
      </div>
    </div>
  );
}
