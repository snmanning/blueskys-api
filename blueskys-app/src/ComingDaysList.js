import React from 'react';
import axios from 'axios';
import ComingDays from './ComingDays';
import Main from './Main';
import PropTypes from 'prop-types'

const ComingDaysList = (props) => {
    const weekCast = props.daily.map((data, i) => 
        <ComingDays futureCast={data} key={i} />);
    return(
        <div>
            <Main>
                {weekCast}
            </Main>
        </div>
    );
};

ComingDaysList.propTypes = {
    futureCast: PropTypes.array.isRequired
};

export default ComingDaysList;