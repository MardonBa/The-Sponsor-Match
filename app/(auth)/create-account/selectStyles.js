// this file just exports the styles object for styling all of the dropdowns

export const selectStyles = {
  container: (base) => ({
    ...base,
    margin: '15px 0px',
    width: '400px'
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: 'var(--background)',
    borderRadius: '15px',
    border: state.isFocused ? '2px solid var(--primary-variant) !important': '2px solid var(--primary)',
    boxShadow: 'none',
    color: 'var(--text)'
  }),
  valueContainer: (base) => ({
    ...base,
    color: 'var(--text)'
  }),
  singleValue: (base) => ({
    ...base,
    color: 'var(--text)',
  }),
  menuList: (base) => ({
    ...base,
    backgroundColor: 'var(--background) !important',
    color: 'var(--text) !important'
  }), 
  option: (base, state) => ({
    ...base,
    color: state.isFocused? 'var(--background)' : 'var(--text)',
    backgroundColor: state.isFocused ? 'var(--primary)' : 'var(--background)',
    cursor: state.isFocused ? 'pointer' : 'auto'
  })
}

export const selectStylesMulti = {
  container: (base) => ({
    ...base,
    margin: '15px 0px',
    width: '400px'
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: 'var(--background)',
    borderRadius: '15px',
    border: state.isFocused ? '2px solid var(--primary-variant) !important': '2px solid var(--primary)',
    boxShadow: 'none',
    color: 'var(--text)'
  }),
  valueContainer: (base) => ({
    ...base,
    color: 'var(--text)'
  }),
  singleValue: (base) => ({
    ...base,
    color: 'var(--text)',
  }),
  menuList: (base) => ({
    ...base,
    backgroundColor: 'var(--background) !important',
    color: 'var(--text) !important'
  }), 
  option: (base, state) => ({
    ...base,
    color: state.isFocused? 'var(--background)' : 'var(--text)',
    backgroundColor: state.isFocused ? 'var(--primary)' : 'var(--background)',
    cursor: state.isFocused ? 'pointer' : 'auto'
  }),
  multiValue: (base) => ({
    ...base,
    padding: '1px',
    backgroundColor: 'var(--primary)'
  }),
  multiValueLabel: (base) => ({
    ...base, 
    color: 'var(--background)',
    backgroundColor: 'var(--primary)'
  }),
}