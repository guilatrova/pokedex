/* eslint-disable react/prop-types */
import React from 'react';

import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';

export const Suggestion = (suggestion, { query, isHighlighted }) => {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);
    
    return (
        <MenuItem selected={isHighlighted} component="div">
            <div>
                {parts.map((part, index) => {
                    return part.highlight ? (
                        <span key={String(index)} style={{ fontWeight: 300 }}>
                            {part.text}
                        </span>
                    ) : (
                        <strong key={String(index)} style={{ fontWeight: 500 }}>
                            {part.text}
                        </strong>
                    );
                })}
            </div>
        </MenuItem>
    );
};

export const SuggestionsContainer = (props) => {
    const { containerProps, children } = props;
    
    return (
        <Paper {...containerProps} square>
            {children}
        </Paper>
    );
};