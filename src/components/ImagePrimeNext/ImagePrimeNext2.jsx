import { localeOption } from 'primereact/api'
import React, { useState, useRef, useImperativeHandle, forwardRef, useEffect } from 'react';
import NextImage from 'next/image';
import { CSSTransition } from 'primereact/csstransition';
import { Portal } from 'primereact/portal';
import { DomHandler, classNames, mergeProps } from 'primereact/utils'
import { ImageBase } from './data'

const CustomImage = forwardRef((props, ref) => {
    const [maskVisible, setMaskVisible] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [rotate, setRotate] = useState(0);
    const [scale, setScale] = useState(1);
    const previewButton = React.useRef(null);
    const [maskVisibleState, setMaskVisibleState] = React.useState(false);
    const [previewVisibleState, setPreviewVisibleState] = React.useState(false);
    const [rotateState, setRotateState] = React.useState(0);
    const [scaleState, setScaleState] = React.useState(1);
    
    
    const maskRef = useRef(null);
    const previewRef = useRef(null);
    
    const { ptm, cx, sx, isUnstyled } = ImageBase.setMetaData({
        props,
        state: {
            maskVisible: maskVisibleState,
            previewVisible: previewVisibleState,
            rotate: rotateState,
            scale: scaleState
        }
    });
    
    const previewContainerProps = mergeProps(
      {
          ref: previewRef
      },
      ptm('previewContainer')
    );
    
    const show = () => {
        if (props.preview) {
            setMaskVisibleState(true);
            DomHandler.blockBodyScroll();
            setTimeout(() => {
                setPreviewVisibleState(true);
            }, 25);
        }
    };
    const hide = () => {
        setPreviewVisibleState(false);
        DomHandler.unblockBodyScroll();
        setRotateState(0);
        setScaleState(1);
    };
    
    
    useImperativeHandle(ref, () => ({
        show() {
            setMaskVisible(true);
            DomHandler.blockBodyScroll();
            setTimeout(() => setPreviewVisible(true), 25);
        },
        hide() {
            setPreviewVisible(false);
            DomHandler.unblockBodyScroll();
            setRotate(0);
            setScale(1);
        }
    }));
    
    // const showPreview = () => {
    //     if (props.preview) {
    //         setMaskVisible(true);
    //         DomHandler.blockBodyScroll();
    //         setTimeout(() => {
    //             setPreviewVisible(true);
    //         }, 25);
    //     }
    // };
    
    // const hidePreview = () => {
    //     setPreviewVisible(false);
    //     DomHandler.unblockBodyScroll();
    //     setRotate(0);
    //     setScale(1);
    // };
    
    const zoomIn = () => {
        setScale((prevScale) => Math.min(prevScale + 0.1, 1.5));
    };
    
    const zoomOut = () => {
        setScale((prevScale) => Math.max(prevScale - 0.1, 0.5));
    };
    
    const rotateRight = () => {
        setRotate((prevRotate) => prevRotate + 90);
    };
    
    const rotateLeft = () => {
        setRotate((prevRotate) => prevRotate - 90);
    };
    
    const createPreview = () => {
        const ariaLabel = localeOption('aria') ? localeOption('aria').zoomImage : undefined;
        const buttonProps = mergeProps(
          {
              ref: previewButton,
              className: cx('button'),
              onClick: show,
              type: 'button',
              'aria-label': ariaLabel
          },
          ptm('button')
        );
        
        if (props.preview) {
            return <button {...buttonProps}>{content}</button>;
        }
        
        return null;
    };
    
    const createToolbar = () => {
        return (
          <div className="p-image-toolbar">
              <button onClick={zoomIn}>Zoom In</button>
              <button onClick={zoomOut}>Zoom Out</button>
              <button onClick={rotateRight}>Rotate Right</button>
              <button onClick={rotateLeft}>Rotate Left</button>
              <button onClick={hide}>Close</button>
          </div>
        );
    };
    
    const createPreviewImage = () => {
        return (
          <CSSTransition in={previewVisible} timeout={150} classNames="p-image-preview" unmountOnExit>
              <div className="p-image-preview-container">
                  <NextImage
                    src={props.src}
                    alt={props.alt}
                    width={props.width || 400}
                    height={props.height || 300}
                    style={{ transform: `rotate(${rotate}deg) scale(${scale})` }}
                  />
              </div>
          </CSSTransition>
        );
    };
    
    return (
      <span className={classNames('p-image p-component', { 'p-image-preview-container': props.preview })}>
            <NextImage
              src={props.src}
              alt={props.alt}
              width={props.width || 400}
              height={props.height || 300}
              className={props.className}
              onClick={props.preview ? show : undefined}
            />
          {props.preview && createPreview()}
          {maskVisible && (
            <Portal>
                <div ref={maskRef} className="p-image-mask" onClick={hide}>
                    {createToolbar()}
                    {createPreviewImage()}
                </div>
            </Portal>
          )}
        </span>
    );
});

CustomImage.displayName = 'CustomImage';
export default CustomImage;
