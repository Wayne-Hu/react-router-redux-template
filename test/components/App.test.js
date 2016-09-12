/**
 * Created by wayne on 13/09/16.
 */
import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';

import {App} from '../../src/components'

describe("App Container", () => {
    it("should contain children", () => {
        expect(
            shallow(
                <App>
                    <div>test</div>
                </App>
            ).contains(<div>test</div>)
        ).to.equal(true);
    })
});