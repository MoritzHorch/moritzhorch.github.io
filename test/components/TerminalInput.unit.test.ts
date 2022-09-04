import TerminalInput from '@/components/TerminalInput.svelte';
import { commandHistory } from '@/stores/commandHistory';
import { act, fireEvent, render, screen } from '@testing-library/svelte';

vi.mock('@/stores/commandHistory', () => ({
  commandHistory: {
    update: vi.fn()
  }
}));

describe('Terminal Entry ...', () => {
  it('should render terminal input', () => {
    render(TerminalInput);

    expect(screen.getByText('$>')).toBeInTheDocument();
  });

  it('should sent commands to store', async () => {
    render(TerminalInput);

    const inputField = screen.getByTestId('terminal-input');

    await act(() =>
      fireEvent.change(inputField, {
        target: { value: 'sdf' }
      })
    );

    expect(commandHistory.update).not.toHaveBeenCalled();

    await act(() =>
      fireEvent.keyUp(inputField, {
        key: 'Enter'
      })
    );

    expect(commandHistory.update).toHaveBeenCalled();
  });
});
