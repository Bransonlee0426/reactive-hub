import Books from '../components/Books';
import NavBar from '../components/NavigationBar';
import Banner from '../components/Banner';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PageContainer = styled.div`
  height: 100vh;
`;

const StyledContent = styled.div`
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 360ms ease-in;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity ease-in;
  }
`;
function HomePage() {
  const location = useLocation();
  return (
    <div className="h-screen">
      <PageContainer>
        <NavBar />
        <TransitionGroup>
          <CSSTransition key={location.pathname} classNames="fade" timeout={360}>
            <StyledContent>
              <Routes location={location}>
                <Route path="/" element={<Banner />} />
                <Route path="/books" element={<Books />} />
              </Routes>
            </StyledContent>
          </CSSTransition>
        </TransitionGroup>
      </PageContainer>
    </div>
  );
}

export default HomePage;
