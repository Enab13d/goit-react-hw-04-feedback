import { SectionTitle, StatsSection } from "./Section.styled";
import PropTypes from 'prop-types';
export const Section = ({title, children}) => {
    return (
        <StatsSection>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </StatsSection>
    )
}
Section.propTypes = {
    title: PropTypes.string.isRequired
}