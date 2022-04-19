import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FusePageCarded from '@fuse/core/FusePageCarded';

import TableComponent from 'app/fuse-layouts/shared-components/table';
import PageCardedHeader from 'app/fuse-layouts/shared-components/page-carded-header/PageCardedHeader';

// import { getAll, selectAll } from '../store/carsSlice';

const columns = [
	{
		id: 'description',
		align: 'left',
		disablePadding: false,
		label: 'Descrição',
		sort: false
	}
];