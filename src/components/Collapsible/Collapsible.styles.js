import styled from 'styled-components';

export const CollapsibleWrapper = styled.div`
    background-color: #fff;
    border-radius: 4px;
    max-width: 420px;
    margin: 0 auto 30px auto;
    text-align: left;
    padding: 20px;
    position: relative;
    min-height: 100px;
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 300;
    padding: 10px 15px 20px 15px;
    margin-bottom: 10px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.05);
    cursor: pointer;
`;

export const Panel = styled.div`
    font-size: 16px;
    line-height: 1.5em;
    box-shadow: 0 1px 1px rgba(0,0,0,0.05);
    .body-container {
        padding: 0 15px 20px 15px;

        .user-media{
            width: 20%;
            float: left;
        }
        .user-data{
            width: calc(80% - 10px);
            padding-left: 10px;
            float: right;
        }
        .clearfix{
            clear: both;
            float: none;
        }
    }
`;

export const ItemWrapper = styled.div`
    /* Simple way
    &.isExpanded{
        ${Panel}{
            display: block;
        }
    }
    */

   /* CSS transitions way
    ${Panel}{
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.5s ease-out;
    }
    &.isExpanded{
        ${Panel}{
            max-height: 200px;
        }
    }
    */

    /* JS calculations height & CSS transitions */
    &.isExpanded{
        ${Title}{
            box-shadow: none;
        }
    }
    ${Panel}{
        overflow: hidden;
        transition: height 0.3s ease-out;
    }

`;