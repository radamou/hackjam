import React, { Component, Fragment } from 'react';
import { Header }  from '../Layout/Header'
import { Container, SubHeader } from '../Layout/Body'
import { Search, Row, RefreshButton } from './structure'

export class Dashboard extends Component {
    state = {
        loading: false,
        loadingRefresh: false
    }

    render() {
        return <Fragment>
            <Header />
            <Container>
                <SubHeader>
                    <Row>
                        <RefreshButton>
                            refresh
                        </RefreshButton>
                        <Search>
                        </Search>
                    </Row>
                </SubHeader>
            </Container>
        </Fragment>
    }
}