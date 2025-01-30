import { Nftcard } from '@/app/components/nftCard';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';

const Id = 3
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

test('renders user ID and navigates when button is clicked', () => {
  const pushMock = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    
  // Provide the required prop (userId)
  render(<Nftcard id={Id}
    title={'title'}
      key={Id}
      src={'/example'}
      alt={'alt'}
      desc={'describe'}
      author={'minni'}
      price={'bkee'}
      time={'timenow'}
      bidding={'bid'}
      likes={54}
      liked={Id % 2 === 0 ? true : false}
      avatar />);

  // Ensure the user ID is displayed
  expect(screen.getByText('test')).toBeInTheDocument(); // ✅

  // Click the "Go to Profile" button
  fireEvent.click(screen.getByText('test'));

  // Ensure navigation function was called correctly
  expect(pushMock).toHaveBeenCalledWith("/artDetails"); // ✅
});