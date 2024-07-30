import { useRef } from 'react';
import Books from '../components/Books';
import NavBar from '../components/NavigationBar';
import Banner from '../components/Banner';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

function HomePage() {
  const location = useLocation();
  const nodeRef = useRef(null);
  return (
    <div className="h-screen">
      <PageContainer>
        <NavBar />
        <SwitchTransition>
          <CSSTransition key={location.pathname} nodeRef={nodeRef} classNames="fade" timeout={200}>
            <StyledContent ref={nodeRef}>
              <Routes location={location}>
                <Route path="/" element={<Banner />} />
                <Route path="/books" element={<Books />} />
              </Routes>
            </StyledContent>
          </CSSTransition>
        </SwitchTransition>
      </PageContainer>
    </div>
  );
}

export default HomePage;

const PageContainer = styled.div`
  height: 100vh;
`;

const StyledContent = styled.div`
  height: calc(100vh - 10px);
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity ease-in;
  }
`;
