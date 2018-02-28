import React from 'react';
import PropTypes from 'prop-types';

import { TableSort, DataColumn } from '../../common/components/TableSort';
import { sort } from '../../utils/sorts';

const renderName = (stat, field) => {
    const name = stat[field].name.replace('-', ' ');
    return name.charAt(0).toUpperCase() + name.slice(1);
};

const onSortName = (a, b, order) => sort(a.name, b.name, order);

const StatsTable = ({ stats }) => {
    return (
        <TableSort data={stats} initialOrderBy="stat">
            <DataColumn sortable field="stat" onRender={renderName} onSort={onSortName}>Name</DataColumn>
            <DataColumn sortable field="base_stat">Value</DataColumn>
        </TableSort>
    );
};

StatsTable.propTypes = {
    stats: PropTypes.array.isRequired,
};

export default StatsTable;