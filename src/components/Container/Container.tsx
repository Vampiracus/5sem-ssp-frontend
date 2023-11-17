import './Container.scss';
import { PropsWithChildren } from 'react';

const Container = (props: PropsWithChildren & { class?: string; outerClass?: string }) => {
    return (
        <div
            className={
                'container ' + (props.outerClass ? props.outerClass : '')
            }>
            <div
                className={
                    'container__content ' + (props.class ? props.class : '')
                }>
                {props.children}
            </div>
        </div>
    );
};

export default Container;
