import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} time="Today At 4:00PM" image={faker.image.avatar()} imageAlt={faker.name.firstName()} comment="hello" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} time="Yesterday At 3:00AM" image={faker.image.avatar()} imageAlt={faker.name.firstName()} comment="hello" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} time="Last Friday At 12:00PM" image={faker.image.avatar()} imageAlt={faker.name.firstName()} comment="hello" />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));