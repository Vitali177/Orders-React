import React, {Component} from 'react';
import generateYandexMap from './generate-yandex-map';
import Spinner from '../spinner/';

import './orderMap.css';

export default class OrderMap extends Component {

    state = {
        loading: true,
        error: false
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.order !== null) {
            const {address, region, country} = nextProps.order;

            const queryApi = 'https://api.opencagedata.com/geocode/v1/json?';
            const accessKey = `q=${address},${region},${country}&key=ddc1c7bc04434a968ca2655d83467aee&pretty=1&no_annotations=1&language=en`;
            const url = queryApi + accessKey;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    generateYandexMap(data.results[0].geometry.lat, data.results[0].geometry.lng);
                    this.setState({loading: false});
                })
                .catch(err => this.setState({error: true}));
        }        
    }

    render() {
        const {indexTab, indexTabSelected} = this.props;
        const {loading, error} = this.state;

        const spinner = loading ? <Spinner /> : null;
        const content = (!loading && !error) ? <div id="map"></div> : null; 
        const errorResult = error ? <div class="no-map">Region and street of the shipping address is not found</div> : null;

        let sectionClassNames = 'order__map';
        sectionClassNames += indexTab === indexTabSelected ? ' tab--selected' : '';

        return (            
            <section className={sectionClassNames}>
                <div className="order__map-header order__address-header"> 
                    <h4 className="order__map-heading order__address-heading">Location of the delivery address</h4>
                </div>
                {spinner}
                {content}
                {errorResult}
            </section>
        )
    }    
}
