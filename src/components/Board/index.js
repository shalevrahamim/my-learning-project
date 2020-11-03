import React, { useState, useEffect } from 'react';
import Card from '../Card';

const Board = ({ cards, click, won }) => {

    const [state, setState] = useState({
        memoryCards: []
    });

    useEffect(() => {
        setState({
            memoryCards: cards
        });
    }, []);

    useEffect(() => {
        if (!hasWon())
            isMatch();
    }, [state.memoryCards]);


    const countFlippedCards = () => {
        const { memoryCards } = state;
        return memoryCards.filter(({ flipped, found }) => flipped && !found).length;
    };

    const flipCard = id => {
        setState({
            memorycards: state.memoryCards.map(card => {
                if (card.id === id)
                    card.flipped = true;
                return card;
            })
        })
    };

    const handleFlip = id => {
        switch (countFlippedCards()) {
            case 0:
                flipCard(id);
                break;
            case 1:
                click();
                flipCard(id);
                break;
            default:
                break;
        }
    };

    isMatch = () => {
        const { memoryCards } = state;
        const flippedCards = memoryCards.filter(card => card.flipped && !card.found);
        if (flippedCards.length != 2)
            return;
        if (flippedCards[0].matchesId === flippedCards[1].id ||
            flippedCards[1].matchesId === flippedCards[0].id) {
            setState({
                memoryCards: state.memoryCards.map(card => {
                    switch (card.id) {
                        case flippedCards[0].id:
                        case flippedCards[1].id:
                            card.found = true;
                            return card;
                        default:
                            return card;
                    }
                })
            });
        } else {
            setTimeout(() => {
                setState({
                    memoryCards: state.memoryCards.map(card => {
                        switch (card.id) {
                            case flippedCards[0].id:
                            case flippedCards[1].id:
                                card.flipped = false;
                                return card;
                            default:
                                return card;
                        }
                    })
                });
            }, 800);
        }
    };

    hasWon = () => {
        const { memoryCards } = state;
        let isWon = memoryCards.every(card => card.found);
        if (isWon)
            won();
        return isWon;
    };


    createBoard = () => {
        return state.memoryCards.length ? (
            state.memoryCards.map(card => (
                <Card
                    key={card.id}
                    flipped={card.flipped}
                    found={card.found}
                    id={card.id}
                    imgUrl={card.url}
                    flip={handleFlip} />
            ))
        ) : (
                <p>Loading cards...</p>
            );
    }

    return (
        <div className="cards">
            {createBoard()}
        </div>
    );
}

export default Board